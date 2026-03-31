#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
from pathlib import Path


DEFAULT_ALIAS_MAP = {
    "socialmedias": "socialmedia",
}


def natural_sort_key(path: Path) -> tuple:
    parts = re.split(r"(\d+)", path.name.lower())
    key = []
    for part in parts:
        if part.isdigit():
            key.append(int(part))
        else:
            key.append(part)
    return tuple(key)


def rename_folder_webp(folder: Path, alias_map: dict[str, str], dry_run: bool) -> int:
    files = sorted(
        [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() == ".webp"],
        key=natural_sort_key,
    )

    if not files:
        return 0

    prefix = alias_map.get(folder.name, folder.name)

    # Two-phase rename avoids collisions when the destination name already exists.
    staged_paths: list[tuple[Path, Path]] = []
    final_paths: list[tuple[Path, Path]] = []

    for i, src in enumerate(files, start=1):
        final_name = f"{prefix}_{i:02d}.webp"
        final_dst = folder / final_name
        temp_dst = folder / f".__tmp__{i:03d}__{src.name}"
        staged_paths.append((src, temp_dst))
        final_paths.append((temp_dst, final_dst))

    if dry_run:
        print(f"[{folder.name}] {len(files)} file(s)")
        for i, src in enumerate(files, start=1):
            print(f"  {src.name} -> {prefix}_{i:02d}.webp")
        return len(files)

    for src, tmp in staged_paths:
        src.rename(tmp)

    for tmp, dst in final_paths:
        tmp.rename(dst)

    print(f"[{folder.name}] renamed {len(files)} file(s)")
    return len(files)


def parse_aliases(alias_items: list[str]) -> dict[str, str]:
    aliases = dict(DEFAULT_ALIAS_MAP)
    for item in alias_items:
        if "=" not in item:
            raise ValueError(f"Invalid alias '{item}'. Use format old=new")
        old, new = item.split("=", 1)
        old = old.strip()
        new = new.strip()
        if not old or not new:
            raise ValueError(f"Invalid alias '{item}'. Use non-empty old=new")
        aliases[old] = new
    return aliases


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Rename .webp files in each immediate subfolder to <folder>_01.webp style names."
        )
    )
    parser.add_argument(
        "--root",
        default="public/graphicdesign",
        help="Root directory containing category folders (default: public/graphicdesign)",
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Apply changes. If omitted, script runs as dry-run.",
    )
    parser.add_argument(
        "--alias",
        action="append",
        default=[],
        help="Folder alias mapping in old=new format. Can be passed multiple times.",
    )

    args = parser.parse_args()
    root = Path(args.root).resolve()

    if not root.exists() or not root.is_dir():
        raise SystemExit(f"Root folder does not exist or is not a directory: {root}")

    try:
        alias_map = parse_aliases(args.alias)
    except ValueError as exc:
        raise SystemExit(str(exc)) from exc

    dry_run = not args.apply
    mode = "DRY-RUN" if dry_run else "APPLY"
    print(f"Mode: {mode}")
    print(f"Root: {root}")

    total = 0
    for folder in sorted([p for p in root.iterdir() if p.is_dir()], key=lambda p: p.name.lower()):
        total += rename_folder_webp(folder, alias_map, dry_run)

    print(f"Total .webp files processed: {total}")


if __name__ == "__main__":
    main()
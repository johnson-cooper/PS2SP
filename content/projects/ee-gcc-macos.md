---
name: ee-gcc-macos
slug: ee-gcc-macos
summary: >-
  Native Apple Silicon build of EE-GCC 2.9-ee-991111-01 (PS2), byte-identical
  output to the original Linux compiler
categories:
  - sdks
  - development
tags:
  - auto-discovered
features: []
authors: []
license: GPL-2.0
homepage: null
source:
  provider: github
  repository: KevinParnell/ee-gcc-macos
  repositoryId: '1425715518'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T14:10:59Z'
latestRelease:
  tag: 2.9-ee-991111-01
  name: EE-GCC 2.9-ee-991111-01 for macOS (arm64)
  publishedAt: '2026-10-19T14:11:00Z'
  url: 'https://github.com/KevinParnell/ee-gcc-macos/releases/tag/2.9-ee-991111-01'
activity:
  lastSynchronized: '2026-10-19T14:59:02.710Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

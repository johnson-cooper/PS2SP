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
  repository: decomp-meadow/ee-gcc-macos
  repositoryId: '1425715518'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-10-20T17:14:30Z'
latestRelease:
  tag: 2.9-ee-991111-01-r2
  name: 'EE-GCC 2.9-ee-991111-01 for macOS (arm64 and x86_64), C and C++'
  publishedAt: '2026-10-19T16:37:59Z'
  url: >-
    https://github.com/decomp-meadow/ee-gcc-macos/releases/tag/2.9-ee-991111-01-r2
activity:
  lastSynchronized: '2026-11-14T10:34:51.111Z'
automation:
  sync: true
  github:
    repoEtag: W/"6585501b2d9c97df0cdb76476bc58f402d27edaa0d1e61a010cb27f895411f44"
    releasesEtag: W/"583c1608d723c3f67bb13c6bdcd539e2d7bbc3e7f9d8ebbc79541f7a7cfa878c"
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

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
  lastSynchronized: '2026-10-22T10:11:37.156Z'
automation:
  sync: true
  github:
    repoEtag: W/"3d4e66085623ff7b0e2e0d1c34d404d0fb93885a6d6abaa05b6c0fc5c2db8959"
    releasesEtag: W/"723fb341255f7b5bbcd3a5883c687bc411aa1f6f81174efe7cae86d64c0bf4ce"
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

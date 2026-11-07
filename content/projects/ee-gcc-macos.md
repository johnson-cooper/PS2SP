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
  lastSynchronized: '2026-11-07T10:09:53.682Z'
automation:
  sync: true
  github:
    repoEtag: W/"4036767eaa825112ce26593bdcdca809a2c830a2d636fa4a738c4b1091db54a2"
    releasesEtag: W/"d2516725a5a305239524ae45b56e846fce6aa98a4d062518c9f4e67d42e7c1e0"
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

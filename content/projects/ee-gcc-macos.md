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
  lastSynchronized: '2026-10-21T10:09:08.998Z'
automation:
  sync: true
  github:
    repoEtag: W/"4511da75ab2d378d6f153b95da045e1ed5891070dc82188efeb4f9a82c791c6c"
    releasesEtag: W/"35105a48abadd106d47fd3d9c3babd113c664a1c51049f706a6b6486e5521eb3"
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

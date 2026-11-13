---
name: ps2sdk
slug: ps2sdk-gw2
summary: Homebrew PS2 SDK
categories:
  - sdks
  - development
tags:
  - ps2dev
  - sdk
  - toolchain
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: gw2/ps2sdk
  repositoryId: '1444745024'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-03T18:33:04Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T00:25:59.753Z'
automation:
  sync: true
  github:
    repoEtag: W/"fec0699d685441d4fc56f09575f127e57c3336c9b4447f70767dac6c7d9f6f2f"
    releasesEtag: '"98b39eaf82b5aff313393cd803aefa154c085e8109a70fb42a843a28b7b06d93"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2sdk'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2dev/ps2sdk
  source: ps2dev/ps2sdk
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

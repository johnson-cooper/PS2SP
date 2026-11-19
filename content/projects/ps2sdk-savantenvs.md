---
name: ps2sdk
slug: ps2sdk-savantenvs
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
  repository: SavantEnvs/ps2sdk
  repositoryId: '1459748570'
repository:
  archived: false
  defaultBranch: mayhem
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T09:26:45Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-19T21:36:46.297Z'
automation:
  sync: true
  github:
    repoEtag: W/"b4c4b4f1075d9258879eec6fdf69e0651302d20447d3f681f040641ce27ce12a"
    releasesEtag: '"caa7d183434892016d9ea4cc625ad2bd81f29e8e398336b6be37a46180bc2fc5"'
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

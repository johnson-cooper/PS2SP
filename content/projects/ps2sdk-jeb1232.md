---
name: ps2sdk
slug: ps2sdk-jeb1232
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
  repository: Jeb1232/ps2sdk
  repositoryId: '1435017801'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-26T23:07:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T19:24:20.810Z'
automation:
  sync: true
  github:
    repoEtag: W/"315f1ccc3b714bf3ecbadf5363cb28cb6698374eae986c3125e3670410a97673"
    releasesEtag: '"4e5a0754123e150edd35f63c077b092fc8acf1f99673343fdbd321eefe2fd689"'
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

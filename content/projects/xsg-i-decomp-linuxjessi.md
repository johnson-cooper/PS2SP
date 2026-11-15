---
name: xsg-i-decomp
slug: xsg-i-decomp-linuxjessi
summary: 'Matching decompilation of Xenosaga Episode I: Der Wille zur Macht for the PS2'
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: LinuxJessi/xsg-i-decomp
  repositoryId: '1447177948'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-05T15:33:53Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-15T09:28:51.708Z'
automation:
  sync: true
  github:
    repoEtag: W/"558fd5da3f38e7d269edc25295c45650394bed49a91f56b2544b311ce9ab80b8"
    releasesEtag: '"045e43fb871b83aadee34533b922e9684305b3410b07ffc90627af62b5c4a1b6"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: OpokXeno/xsg-i-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpokXeno/xsg-i-decomp
  source: OpokXeno/xsg-i-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

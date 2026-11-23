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
  lastSynchronized: '2026-11-23T09:08:28.110Z'
automation:
  sync: true
  github:
    repoEtag: W/"34a5ee572d190de0f7a907dba58c7e9932e9237d9f4cdebb3176e2783e29d2ee"
    releasesEtag: '"4b1936b832eb100b4d032ffeff0fab4b0b465a077892df76bb0807351967be69"'
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

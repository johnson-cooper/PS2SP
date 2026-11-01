---
name: downhill-revived
slug: downhill-revived
summary: >-
  A PC port of Downhill Domination (PS2), built on a matching decompilation.
  Bring your own disc.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: 'https://downhill-revived.pages.dev'
source:
  provider: github
  repository: skuza-oss/downhill-revived
  repositoryId: '1423433613'
repository:
  archived: false
  defaultBranch: main
  stars: 118
  forks: 13
  lastCommit: '2026-10-31T23:38:30Z'
latestRelease:
  tag: v0.7.6
  name: Downhill Revived 0.7.6
  publishedAt: '2026-10-31T23:38:49Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.7.6'
activity:
  lastSynchronized: '2026-11-01T23:36:01.192Z'
automation:
  sync: true
  github:
    repoEtag: W/"4ce8d7393360432d5bb0e609dd80741895373c012cc63f5be0d6f0b7f544bd72"
    releasesEtag: W/"18a4d7381a9d6a82b12dedb6613e58b7ee7e2ecd13b562cffc56869af643d8a0"
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

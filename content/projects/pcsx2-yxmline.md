---
name: pcsx2
slug: pcsx2-yxmline
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'http://pcsx2.net/'
source:
  provider: github
  repository: yxmline/pcsx2
  repositoryId: '44362681'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 1
  lastCommit: '2026-10-12T01:16:18Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-12T07:22:03.521Z'
automation:
  sync: true
  github:
    repoEtag: W/"d1ae81df68153faceb3dad1165e879e745a304ed5dc9fa38391310636e6f5562"
    releasesEtag: '"597d9acb45c2e212ae242acdd5dade32c562200a0a6204e26e773d06161f43f6"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

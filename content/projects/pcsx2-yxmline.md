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
  lastCommit: '2026-10-29T00:20:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-01T07:33:26.720Z'
automation:
  sync: true
  github:
    repoEtag: W/"d75387a04b13907e5fb9e8b766a2b62d4086f704b1a155780c3ff69cd04ffee2"
    releasesEtag: '"8ac24642bd58cc54c647f1529d0cb902c5d19c65a6967e95d12b097c3bec3e70"'
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

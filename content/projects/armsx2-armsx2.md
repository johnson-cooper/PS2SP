---
name: ARMSX2
slug: armsx2-armsx2
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2233
  forks: 183
  lastCommit: '2026-10-21T14:25:51Z'
latestRelease:
  tag: 2.8.4
  name: 'ARMSX2 2.8.4 '
  publishedAt: '2026-10-17T14:16:45Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8.4'
activity:
  lastSynchronized: '2026-10-21T19:19:30.805Z'
automation:
  sync: true
  github:
    repoEtag: W/"16af5ec0d07e9f0b3cea485e49278312d953c6be9ac9a7fe73ac37c77099342e"
    releasesEtag: W/"34c0574c005707ad245c8fa10f8e129760730099d635951b5dd6b39794e2e44d"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

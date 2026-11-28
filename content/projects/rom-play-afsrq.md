---
name: ROM-Play
slug: rom-play-afsrq
summary: >-
  ROM Play: an emulator front end for Mac that plays your RomM library, from the
  Atari 2600 to the PS4. Based on RomP.
categories:
  - host-tools
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: afsrq/ROM-Play
  repositoryId: '1462441287'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-23T03:51:14Z'
latestRelease:
  tag: v0.30.0
  name: ROM Play 0.30.0
  publishedAt: '2026-11-23T03:35:01Z'
  url: 'https://github.com/afsrq/ROM-Play/releases/tag/v0.30.0'
activity:
  lastSynchronized: '2026-11-28T10:30:10.340Z'
automation:
  sync: true
  github:
    repoEtag: W/"d7957f809915a44de8b467aa0172f27bf2656ca8c777fc0b3e3d4a934133057d"
    releasesEtag: W/"7dd3212ddeccf91576738ca8fb3cc510b7c6421845801a6c8f9cefaf4147973f"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: RompEmu/RomP'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: RompEmu/RomP
  source: RompEmu/RomP
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

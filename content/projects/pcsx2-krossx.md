---
name: pcsx2
slug: pcsx2-krossx
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
  repository: KrossX/pcsx2
  repositoryId: '192447569'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 0
  lastCommit: '2026-11-11T01:23:35Z'
latestRelease:
  tag: v1.7.0-dev
  name: Backup Release
  publishedAt: '2022-01-07T22:26:40Z'
  url: 'https://github.com/KrossX/pcsx2/releases/tag/v1.7.0-dev'
activity:
  lastSynchronized: '2026-11-13T22:39:09.453Z'
automation:
  sync: true
  github:
    repoEtag: W/"5ef1b4f1e268518f1a057e9894c1220cb21a6aca6bcb7b3cc89ccbb86c79a566"
    releasesEtag: W/"6988a88fcc4cf872801119491412f21851bb4753e5051852588b82a39fe25cf8"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

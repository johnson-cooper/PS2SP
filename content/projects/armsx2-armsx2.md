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
  stars: 2558
  forks: 255
  lastCommit: '2026-11-22T18:41:22Z'
latestRelease:
  tag: 2.9.5
  name: 'ARMSX2 2.9.5 '
  publishedAt: '2026-11-16T21:49:02Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.9.5'
activity:
  lastSynchronized: '2026-11-22T19:40:32.678Z'
automation:
  sync: true
  github:
    repoEtag: W/"cd6abd74a9b2c38ac5c49224a7c3d2f25393dc667467e0572771608ac81eb1c7"
    releasesEtag: W/"10f6f54eee2a6b3149aa832aa584acfa0c6cb732182dafcd6327a8527f37b184"
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

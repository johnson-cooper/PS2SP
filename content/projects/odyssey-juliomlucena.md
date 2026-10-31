---
name: Odyssey
slug: odyssey-juliomlucena
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: JulioMLucena/Odyssey
  repositoryId: '1424642175'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T23:22:41Z'
latestRelease:
  tag: v0.2.7
  name: 0.2.7
  publishedAt: '2026-10-19T23:22:42Z'
  url: 'https://github.com/JulioMLucena/Odyssey/releases/tag/v0.2.7'
activity:
  lastSynchronized: '2026-10-31T05:41:40.086Z'
automation:
  sync: true
  github:
    repoEtag: W/"ae03ec9e8552fcbfab61846a8cfd91b6df6bb79618a50894bb8e3bcfff6e255b"
    releasesEtag: W/"a1a312c0fa879c0e5b8fad9046fce2164d592172f195c76383d2097499d992e7"
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
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

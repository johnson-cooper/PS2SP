---
name: pcsx2
slug: pcsx2-fsinbad
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: fsinbad/pcsx2
  repositoryId: '829198126'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-08T20:39:56Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-13T16:00:03.603Z'
automation:
  sync: true
  github:
    repoEtag: W/"33c1d3733589296285bee571bb30434f07a3e0562604fe57b8a63629458bf723"
    releasesEtag: '"15713a2721f8178c7d83fba417a3c84da6af87d4100739285cae4aed41a51998"'
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

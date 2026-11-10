---
name: pcsx2
slug: pcsx2-dreadmoth
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
  repository: Dreadmoth/pcsx2
  repositoryId: '278090783'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T00:54:03Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-10T01:33:01.213Z'
automation:
  sync: true
  github:
    repoEtag: W/"27a8f7666aba440ae5c291952ce889b124509243e9348e2e81c1c1b1232bec94"
    releasesEtag: '"d76f3e553c1dd5eef60eeb0d76793c9027541520aa34488ad60fccdc0acfeba2"'
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

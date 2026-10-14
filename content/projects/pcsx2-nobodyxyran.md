---
name: pcsx2
slug: pcsx2-nobodyxyran
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
  repository: nobodyxyran/pcsx2
  repositoryId: '1417409168'
repository:
  archived: false
  defaultBranch: feature/3d-screenshot
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T16:06:57Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-14T00:20:33.901Z'
automation:
  sync: true
  github:
    repoEtag: W/"9457d7c3c5155d5404fc06af7ba88b3dd77cf755ef8a10737445be3540fb4800"
    releasesEtag: '"36d567469700f4427b574366fb28c0a44b33cd0a46243826716bb9a44ce0b216"'
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
  forkOf: scurest/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

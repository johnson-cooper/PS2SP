---
name: pcsx2
slug: pcsx2-retrorepair
summary: PCSX2 - The Playstation 2 Emulator (GroovyNLC)
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
  repository: retrorepair/pcsx2
  repositoryId: '1403685418'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-03T22:35:37Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-04T23:11:24.625Z'
automation:
  sync: true
  github:
    repoEtag: W/"f9c73710663bc11df65f8e681d855f05a653d6b8fee056bc2c90634bceaefcc3"
    releasesEtag: '"61757e3d64c94fb335698aebfa6b9571b39b33da64902db3a913fc96d3ebae9b"'
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
  forkOf: verbst/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

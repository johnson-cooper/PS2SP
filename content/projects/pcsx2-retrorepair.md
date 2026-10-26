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
  lastCommit: '2026-10-13T16:11:25Z'
latestRelease:
  tag: v2026.10.13
  name: PCSX2 GroovyNLC v2026.10.13
  publishedAt: '2026-10-13T16:11:26Z'
  url: 'https://github.com/retrorepair/pcsx2/releases/tag/v2026.10.13'
activity:
  lastSynchronized: '2026-10-26T23:54:45.274Z'
automation:
  sync: true
  github:
    repoEtag: W/"917a92cad97e0d42b9276483bb2406dd7d8e6caedc42ae6d5f44c3dde6e724f9"
    releasesEtag: W/"2c53bcefeb5b1c4a10596fc1cdb95fec3644e3a6fad19aa58212da403269bb9d"
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

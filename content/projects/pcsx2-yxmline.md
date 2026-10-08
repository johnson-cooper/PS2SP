---
name: pcsx2
slug: pcsx2-yxmline
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
  repository: yxmline/pcsx2
  repositoryId: '44362681'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 1
  lastCommit: '2026-10-08T07:10:00Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-08T07:26:23.133Z'
automation:
  sync: true
  github:
    repoEtag: W/"c0733a5700e6748cf1caffd5288d2839ad7d88420499ef6a5a588a810548a1dc"
    releasesEtag: '"63e5a61ab3ac941f852a93f9fb7c274e5624c73858c722cbb743052f631f2a8a"'
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
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

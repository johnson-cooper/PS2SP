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
  lastSynchronized: '2026-10-11T15:42:09.539Z'
automation:
  sync: true
  github:
    repoEtag: W/"7c01e0708c91d92f1615d00b0411b0a60688cac972688f38af08651f0943e52f"
    releasesEtag: '"e33f1da332981b44846cc1f360ff0a2111ac9a73aecbbdd36de7fa8f4a740af7"'
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

---
name: pcsx2
slug: pcsx2-lightningterror
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
  repository: lightningterror/pcsx2
  repositoryId: '97401061'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 1
  lastCommit: '2026-10-30T04:34:04Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-19T13:08:12.232Z'
automation:
  sync: true
  github:
    repoEtag: W/"13b80f7a09dc522678f6d8e66e1df651f02e8cd8d8d2639619bd91c2028ddcba"
    releasesEtag: '"c0c458a23f97f1899cefc645c39e8be3a82be231c97070fce8b3880bc5f8fe53"'
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

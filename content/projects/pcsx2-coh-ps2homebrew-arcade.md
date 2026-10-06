---
name: pcsx2-coh
slug: pcsx2-coh-ps2homebrew-arcade
summary: PCSX2 Fork looking to emulate a `COH-H3xxxx` PS2 model
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
  repository: PS2Homebrew-arcade/pcsx2-coh
  repositoryId: '1064279985'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 1
  lastCommit: '2026-10-06T17:13:57Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-06T21:53:56.790Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
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

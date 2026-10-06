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
  lastCommit: '2026-10-05T03:48:13Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-06T07:35:43.480Z'
automation:
  sync: true
  github:
    repoEtag: W/"6b1db8cacb9a5d5cb265c09c8c04780f2ec9c65c23e6fd11ab70219063a2235f"
    releasesEtag: '"fda0faeeded81ec1ec657e529388474a4dc17fc4cffc29d4d1c5424a71c977c0"'
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

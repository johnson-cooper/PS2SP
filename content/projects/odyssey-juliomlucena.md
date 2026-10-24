---
name: Odyssey
slug: odyssey-juliomlucena
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
  repository: JulioMLucena/Odyssey
  repositoryId: '1424642175'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T23:22:41Z'
latestRelease:
  tag: v0.2.7
  name: 0.2.7
  publishedAt: '2026-10-19T23:22:42Z'
  url: 'https://github.com/JulioMLucena/Odyssey/releases/tag/v0.2.7'
activity:
  lastSynchronized: '2026-10-24T05:54:56.803Z'
automation:
  sync: true
  github:
    repoEtag: W/"15f614617c2f05bb55af8c85c79addcef7dc00c321b2a23129e29ed8511438ba"
    releasesEtag: W/"9197326f852ad20b420c62c4ec2b35c37406bfeceec48c089104a58d16c62edd"
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

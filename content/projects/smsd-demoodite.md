---
name: SMSD
slug: smsd-demoodite
summary: Multimedia player for Sony PlayStation 2 specialized for DmoStation 2
categories:
  - media
tags:
  - media-player
  - video
  - audio
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Demoodite/SMSD
  repositoryId: '1263565005'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-16T22:34:46Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T00:26:20.074Z'
automation:
  sync: true
  github:
    repoEtag: W/"743efc0183c1cf98d6444366eddac72595a3dc82ec04921a010c40c732a4a500"
    releasesEtag: '"98b39eaf82b5aff313393cd803aefa154c085e8109a70fb42a843a28b7b06d93"'
discovery:
  method: 'fork-network:ps2homebrew/SMS'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/SMS'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/SMS
  source: ps2homebrew/SMS
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

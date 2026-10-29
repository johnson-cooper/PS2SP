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
  lastSynchronized: '2026-10-29T00:59:09.302Z'
automation:
  sync: true
  github:
    repoEtag: W/"1dbfa278dcdc3426f3db884b9156fb7203bbcf1ccaa7c15333d6fc5214443385"
    releasesEtag: '"ed883635daf9e1a915725ab8be081a3ea70614a4faeaca680146a5aa9133984d"'
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

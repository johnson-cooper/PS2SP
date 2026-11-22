---
name: psiimedia
slug: psiimedia-mxrlbo
summary: Multimedia player for Sony PlayStation 2
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
  repository: mxrlbo/psiimedia
  repositoryId: '1360675420'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-08-05T07:09:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-22T03:17:35.778Z'
automation:
  sync: true
  github:
    repoEtag: W/"82e2445b6e1ae162e95c586f4bd56ccf0d8a5c70cbfecc2e50884dc0b0990051"
    releasesEtag: '"0343964b28fb2eda143511ab450b2bffb6215822f235192fb1be4cc3a8b0fb1f"'
discovery:
  method: 'fork-network:ps2homebrew/SMS'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/SMS'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/SMS
  source: ps2homebrew/SMS
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

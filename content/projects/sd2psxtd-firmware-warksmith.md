---
name: sd2psXtd_firmware
slug: sd2psxtd-firmware-warksmith
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - hardware
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://sd2psxtd.github.io'
source:
  provider: github
  repository: Warksmith/sd2psXtd_firmware
  repositoryId: '1440747873'
repository:
  archived: false
  defaultBranch: game2folder-wildcards-default
  stars: 0
  forks: 0
  lastCommit: '2026-11-03T03:11:31Z'
latestRelease:
  tag: v0.3
  name: v0.3 - GameID Defaults & Wildcards
  publishedAt: '2026-11-03T03:07:48Z'
  url: 'https://github.com/Warksmith/sd2psXtd_firmware/releases/tag/v0.3'
activity:
  lastSynchronized: '2026-11-07T02:50:50.855Z'
automation:
  sync: true
  github:
    repoEtag: W/"65fb4cdede542fb6a4862422567cac5d57977f4ac9c1b90471e15beeca0fea43"
    releasesEtag: W/"7ebd3b373feae6650db69bfdbcf781967651818e3a59f8b3ad463d6e194d9554"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sd2psx/firmware'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: sd2psXtd/firmware
  source: sd2psx/firmware
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

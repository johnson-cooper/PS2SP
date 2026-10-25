---
name: OPL-DS4RTBT
slug: opl-ds4rtbt-miguelqueiroz010
summary: >-
  OPL fork that lets you use a DualSense, DualShock 4 wirelessly on your PS2
  through PADEMU. Also adds a “Search” button so you can pair DS4/DualSense pads
  over Bluetooth right from the OPL menu, no USB cable needed
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: MiguelQueiroz010/OPL-DS4RTBT
  repositoryId: '1416070789'
repository:
  archived: false
  defaultBranch: mtap-menu-redesign
  stars: 2
  forks: 0
  lastCommit: '2026-10-25T00:19:21Z'
latestRelease:
  tag: rt-2.8.0
  name: OPL DualSense/DS4 BT rt-2.8.0
  publishedAt: '2026-10-21T23:06:24Z'
  url: 'https://github.com/MiguelQueiroz010/OPL-DS4RTBT/releases/tag/rt-2.8.0'
activity:
  lastSynchronized: '2026-10-25T10:09:09.591Z'
automation:
  sync: true
discovery:
  method: 'fork-network:rodrigoGalvanDev/OPL-DualSense-BT'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: rodrigoGalvanDev/OPL-DualSense-BT
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

---
name: OPL-DualSense-BT
slug: opl-dualsense-bt-rodrigogalvandev
summary: >-
  OPL fork that lets you use a DualSense wirelessly on your PS2 through PADEMU.
  Also adds a “Search” button so you can pair DS4/DualSense pads over Bluetooth
  right from the OPL menu, no USB cable needed
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
  repository: rodrigoGalvanDev/OPL-DualSense-BT
  repositoryId: '1414117808'
repository:
  archived: false
  defaultBranch: dualsense-bt
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T09:37:30Z'
latestRelease:
  tag: '1.0'
  name: 'v1.0: DualSense over Bluetooth'
  publishedAt: '2026-10-11T09:12:43Z'
  url: 'https://github.com/rodrigoGalvanDev/OPL-DualSense-BT/releases/tag/1.0'
activity:
  lastSynchronized: '2026-10-11T20:34:57.079Z'
automation:
  sync: true
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
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
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

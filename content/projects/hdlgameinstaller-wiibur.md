---
name: HDLGameInstaller
slug: hdlgameinstaller-wiibur
summary: The HDLoader game installer
categories:
  - installers
  - loaders
tags:
  - hdd
  - hdloader
  - installer
  - fork
  - auto-discovered
features:
  - hdd
authors: []
license: null
homepage: null
source:
  provider: github
  repository: wiibur/HDLGameInstaller
  repositoryId: '1090791867'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-11-06T06:41:56Z'
latestRelease:
  tag: v1.0.1
  name: v1.0.1 - Improved Timeout Handling
  publishedAt: '2025-11-06T06:45:40Z'
  url: 'https://github.com/wiibur/HDLGameInstaller/releases/tag/v1.0.1'
activity:
  lastSynchronized: '2026-11-08T19:42:55.072Z'
automation:
  sync: true
  github:
    repoEtag: W/"84263a5431830b86fa37cbc6f1d3cb7bcf297af4be6747e56deb1e7625cf415b"
    releasesEtag: W/"64f3a1dfd59d657087ea56a53bccc8e558a64e159b215e67c105c7bbd55000f2"
discovery:
  method: 'fork-network:ps2homebrew/HDLGameInstaller'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/HDLGameInstaller'
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/HDLGameInstaller
  source: ps2homebrew/HDLGameInstaller
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

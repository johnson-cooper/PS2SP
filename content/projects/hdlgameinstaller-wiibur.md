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
  lastSynchronized: '2026-10-22T19:16:05.042Z'
automation:
  sync: true
  github:
    repoEtag: W/"f1911b6a47a7a1c7e05f86380d0216a3b486147b97c5b2e35a6f8285124dd7f3"
    releasesEtag: W/"9cc2478f8c758c4a2e41a4a6982773cf9a90b6604fc136d5c6c2dd7c8f3659ce"
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

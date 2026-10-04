---
name: OPL-Launcher
slug: opl-launcher-jdev15
summary: >-
  Fork to build OPL Launcher with latest release of the PS2 SDK to prevent hangs
  on some Crucial SSDs
categories:
  - launchers
  - loaders
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: jdev15/OPL-Launcher
  repositoryId: '773466305'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2024-03-18T00:17:16Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2024-03-26T22:47:22Z'
  url: 'https://github.com/jdev15/OPL-Launcher/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-02T02:17:06.216Z'
automation:
  sync: true
  github:
    repoEtag: W/"df7c940504988bf0a19c5d063bf6394d9544d16519e4a1aad343de9d72d8be5f"
    releasesEtag: W/"9d7d73509b0c62f46fdcb09e3b9bce6d7717c589205bfc8a2b4b98a9743931fb"
discovery:
  method: 'fork-network:ps2homebrew/OPL-Launcher'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/OPL-Launcher'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/OPL-Launcher
  source: ps2homebrew/OPL-Launcher
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

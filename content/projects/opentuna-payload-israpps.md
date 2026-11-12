---
name: opentuna-payload
slug: opentuna-payload-israpps
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: israpps/opentuna-payload
  repositoryId: '528654065'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2022-10-05T01:54:22Z'
latestRelease:
  tag: latest
  name: Latest automated payload compilation
  publishedAt: '2022-08-25T01:43:08Z'
  url: 'https://github.com/israpps/opentuna-payload/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-12T03:00:20.220Z'
automation:
  sync: true
  github:
    repoEtag: W/"276befc9a1e03d7c5a0348188dc7425c9f8a1d73dc541deb2e3fcdce3ee7f38f"
    releasesEtag: W/"2dec3e41ff5dde1055e8145a1c2728d437fff730edab3354bae2bee9d5bc78ff"
discovery:
  method: 'fork-network:blckbearx/opentuna-payload'
  confidence: 95
  evidence:
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/opentuna-payload'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: blckbearx/opentuna-payload
  source: ps2homebrew/opentuna-payload
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

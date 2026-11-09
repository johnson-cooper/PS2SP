---
name: OPS2L
slug: ops2l-dr-q
summary: Open PS2 Loader
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
homepage: 'https://travis-ci.org/Dr-Q/OPS2L'
source:
  provider: github
  repository: Dr-Q/OPS2L
  repositoryId: '76039565'
repository:
  archived: false
  defaultBranch: fix/travis-and-lang_pack
  stars: 0
  forks: 0
  lastCommit: '2017-02-07T18:27:04Z'
latestRelease:
  tag: untagged-9466dde3aedcb2ad5b4d
  name: null
  publishedAt: '2016-12-29T20:02:56Z'
  url: 'https://github.com/Dr-Q/OPS2L/releases/tag/untagged-9466dde3aedcb2ad5b4d'
activity:
  lastSynchronized: '2026-11-09T07:12:30.852Z'
automation:
  sync: true
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

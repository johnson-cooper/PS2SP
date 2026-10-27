---
name: ghidra-emotionengine-reloaded
slug: ghidra-emotionengine-reloaded-aleph-void
summary: ' An extension for Ghidra that adds support for the PlayStation 2. '
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: Apache-2.0
homepage: null
source:
  provider: github
  repository: aleph-void/ghidra-emotionengine-reloaded
  repositoryId: '1435758341'
repository:
  archived: false
  defaultBranch: ghidra-rare
  stars: 0
  forks: 0
  lastCommit: '2026-10-27T15:41:16Z'
latestRelease:
  tag: ghidra-rare-v1.0.0
  name: ghidra-rare-v1.0.0
  publishedAt: '2026-10-27T13:21:02Z'
  url: >-
    https://github.com/aleph-void/ghidra-emotionengine-reloaded/releases/tag/ghidra-rare-v1.0.0
activity:
  lastSynchronized: '2026-10-27T16:51:40.447Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      chaoticgd/ghidra-emotionengine-reloaded
  maturity: historical-or-discontinued
verified: false
featured: false
hidden: false
relationships:
  forkOf: chaoticgd/ghidra-emotionengine-reloaded
  source: chaoticgd/ghidra-emotionengine-reloaded
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

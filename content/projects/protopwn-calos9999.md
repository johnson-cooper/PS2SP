---
name: protopwn
slug: protopwn-calos9999
summary: >-
  An exploit for the Protokernel PlayStation 2 systems (SCPH-10000, SCPH-15000,
  and DTL-H10000(S)) that enables arbitrary code execution through a flaw in the
  OSDSYS Browser update code.
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
  repository: calos9999/protopwn
  repositoryId: '1000351837'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-06-11T16:14:12Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-12T11:11:57.654Z'
automation:
  sync: true
  github:
    repoEtag: W/"6d5f19669c2c8de9ca2bb92acaa6869207fcd8a0362c553161bc47ef389dec51"
    releasesEtag: '"952f0fb61c43dbe65d3e0d2cad8f06412f7e64d77f20ebb492a0c852b79b9381"'
discovery:
  method: 'fork-network:pcm720/protopwn'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: pcm720/protopwn'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: pcm720/protopwn
  source: pcm720/protopwn
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

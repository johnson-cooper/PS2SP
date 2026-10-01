---
name: protopwn
slug: protopwn-alex-free
summary: >-
  An exploit for the Protokernel PlayStation 2 systems (SCPH-10000, SCPH-15000,
  and DTL-H10000(S)) that enables arbitrary code execution through a flaw in the
  OSDSYS Browser update code.
categories:
  - uncategorized
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: alex-free/protopwn
  repositoryId: '1015762228'
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
  lastSynchronized: '2026-10-01T17:09:08.395Z'
automation:
  sync: true
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

---
name: protopwn
slug: protopwn-alex-free
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
  lastSynchronized: '2026-10-31T21:35:36.117Z'
automation:
  sync: true
  github:
    repoEtag: W/"1967b5f3beaf8785a57a25d291e2ad959a9705aae31acdb18a8a5dfbd51a727b"
    releasesEtag: '"4da18e51dfb63479748d5f2062fd7c31ab13b4cfeaf582b2c6f4acdcfce67a3f"'
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

import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Tracey Documentation | Crumbles', description: 'Documentation for Tracey, the reliability control plane for production AI agents.', alternates: { canonical: '/tracey/docs' } };

export default function TraceyDocsHome() {
  return <TraceyDocPage current="home" eyebrow="Tracey / Documentation" title="Operate production agents with evidence." intro="Connect your existing agents, observability backend, and infrastructure. Tracey helps you observe runs, investigate failures, prepare safe changes, and verify recovery." sections={[
    { title: 'Start with one agent', body: 'The quickest path is a read-only setup. Connect SigNoz, register one agent, emit a root run span, and confirm the complete execution appears in Tracey.', items: ['Getting started: connect the stack in one guided path', 'Agent runs: understand the telemetry model', 'Custom OpenTelemetry: instrument any framework'] },
    { title: 'The operating loop', body: 'Tracey is built around a durable workflow rather than a chat window: observe, investigate, decide, execute, verify, and recover.', items: ['Investigations across runs, traces, logs, metrics, and Kubernetes', 'Approval workflow with typed actions and policy evaluation', 'Verification based on health evidence, not API acceptance'] },
    { title: 'Connectors and boundaries', body: 'SigNoz remains the telemetry system of record. Agents stay independently deployed. Tracey adds the semantic, policy, and operator layer above them.', items: ['SigNoz for traces, logs, and metrics', 'Kubernetes through separate investigator and executor identities', 'Codex, Claude Code, custom OTel agents, and allowlisted MCP'] },
    { title: 'Read this before production access', body: 'Start in Observe or Recommend mode. Keep production approval-first until your policies, verification criteria, audit history, and recovery paths have been exercised in a non-production environment.', note: 'Tracey never gives a model a shell or unrestricted cloud credentials. Missing telemetry is reported as missing evidence.' },
  ]} />;
}

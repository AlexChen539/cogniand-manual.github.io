# Experimenter Manual

Welcome to the CogniAND Psychology Experiment Platform! This manual will help you understand how to use the platform's features as an experimenter (researcher).

## What is an Experimenter?

An experimenter is the designer and manager of experiments, responsible for creating experiments, recruiting subjects, and managing experimental data. On the CogniAND platform, experimenters can:

- ✅ View and manage experiments they created
- ✅ Use the invitation system to recruit subjects
- ✅ Use experiment templates to quickly create experiments
- ✅ Manage personal profile and roles
- ⚠️ View experiment data (partial placeholder)
- ❌ Create and edit experiments (not fully implemented)

## Quick Navigation

### Getting Started
- [Quick Start](./1-getting-started) - Understand experimenter features in 5 minutes
- [Registration & Login](./2-registration-login) - Create an experimenter account

### Core Features
- [Experiment Management](./3-experiment-management/) - View, create, and publish experiments
- [Template Library](./4-template-library) - Use templates to quickly create experiments
- [Invitation System](./5-invite-system/) - Recruit subjects for experiments
- [Data Management](./6-data-management) - View and export experiment data
- [Backstage](./7-backstage) - Experimenter workspace features

### Important Information
- [Permissions](./8-permissions) - Understand experimenter permissions and guidelines

## Feature Status

### ✅ Fully Implemented Features

1. **Registration & Login**
   - Standard registration (email + password)
   - Email verification
   - Password recovery
   - Auto-login

2. **View Experiments**
   - View list of experiments you created
   - View experiment details and statistics

3. **Invitation System**
   - Generate experiment invitation links
   - Send invitation emails to subjects
   - Share invitation links on social media
   - Verify invitation code validity

4. **Personal Center**
   - Manage personal profile
   - Switch to subject role (if applicable)
   - View messages and notifications

### ❌ Not Implemented Features

1. **Experiment Creation & Editing**
   - Frontend has complete experiment creation interface
   - Backend lacks corresponding implementation
   - Cannot save and publish new experiments

2. **Experiment Publishing Management**
   - Cannot modify experiment status (draft/published/closed)
   - Cannot set experiment visibility

### ⚠️ Partially Implemented/Placeholder Features

1. **Subject Application Management** (API returns empty list)
   - View subject applications
   - Approve or reject applications

2. **Experiment Data Viewing** (placeholder API)
   - View data submitted by subjects
   - Data statistics and analysis
   - Data export functionality

## Typical Workflow

### Experimenter Publishing Experiment Process (Some features not implemented)

1. **Create Experiment** (❌ Not Implemented)
   - Log in to experimenter account
   - Enter "Experimenter Backstage"
   - Click "Create New Experiment"
   - Fill in basic experiment information
   - Configure experiment paradigm and materials
   - Set recruitment conditions

2. **Publish Experiment** (❌ Not Implemented)
   - Preview experiment content
   - Choose publishing method (public/private)
   - Click "Publish" button

3. **Recruit Subjects** (✅ Implemented)
   - Generate invitation link to share with target subjects
   - Or send invitation emails
   - Wait for subject applications

4. **Manage Applications** (⚠️ Placeholder)
   - View subject application list
   - Review subject qualifications
   - Approve or reject applications

5. **Monitor Progress** (⚠️ Placeholder)
   - View number of experiment participants
   - View data collection progress
   - Receive completion notifications

6. **Data Management** (⚠️ Placeholder)
   - View data submitted by subjects
   - Export data for analysis
   - Generate experiment reports

## Permissions

### What Experimenters Can Do

- ✅ View experiments they created
- ✅ Generate and manage invitation links
- ✅ Send invitation emails
- ✅ Manage personal profile
- ✅ Switch roles (if also a subject)
- ⚠️ View experiment data (placeholder)
- ❌ Create new experiments (not implemented)
- ❌ Edit published experiments (not implemented)

### What Experimenters Cannot Do

- ❌ View other experimenters' experiment data
- ❌ Modify other experimenters' experiments
- ❌ View subjects' personal privacy information
- ❌ Delete data submitted by subjects
- ❌ Access administrator functions

## Important Notes

### Experimental Ethics

As an experimenter, you need to follow psychology research ethics standards:

1. **Respect Principle**
   - Respect subjects' autonomy
   - Protect subjects' privacy and dignity
   - Do not discriminate or insult subjects

2. **Beneficence Principle**
   - Experiments should have scientific value and social significance
   - Maximize experiment benefits, minimize risks
   - Provide timely feedback to subjects (if applicable)

3. **Justice Principle**
   - Fair selection of subjects, no discrimination
   - Reasonable distribution of experiment benefits and risks
   - Protect vulnerable groups' rights

4. **Integrity Principle**
   - Truthfully describe experiment content and risks
   - Do not forge or tamper with data
   - Respect academic norms and intellectual property

For details, see: [Data & Privacy - Ethics Compliance](/en/5-data-privacy/4-ethics)

### Data Protection

- Protect subject privacy, do not disclose personal information
- Data used only for purposes stated in informed consent
- Anonymize data when publishing research
- Destroy or archive data according to regulations after research ends

For details, see: [Data & Privacy](/en/5-data-privacy/)

## Need Help?

- Check [FAQ](/en/1-FAQ/)
- Check [Troubleshooting](/en/6-troubleshooting/)
- Contact [Technical Support](/en/7-technical-support/1-contact)

---

**Ready to start?** Check [Quick Start](./1-getting-started) to begin your first experiment!

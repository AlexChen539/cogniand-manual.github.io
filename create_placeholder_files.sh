#!/bin/bash

# 创建占位文件的函数
create_placeholder() {
    local file=$1
    local title=$2
    cat > "$file" << EOF
# $title

> 本页面内容正在完善中，敬请期待。

## 概述

本章节将介绍$title的相关内容。

## 内容规划

- 详细说明
- 使用步骤
- 注意事项
- 常见问题

---

**提示**：您可以先查看其他章节，或联系[技术支持](/7-technical-support/1-contact)获取帮助。
EOF
}

# 主试手册
create_placeholder "2-experimenter-manual/1-getting-started.md" "主试快速开始"
create_placeholder "2-experimenter-manual/2-registration-login.md" "主试注册与登录"
create_placeholder "2-experimenter-manual/3-experiment-management/index.md" "实验管理"
create_placeholder "2-experimenter-manual/3-experiment-management/3-1-view-experiments.md" "查看实验列表"
create_placeholder "2-experimenter-manual/3-experiment-management/3-2-create-experiment.md" "创建实验"
create_placeholder "2-experimenter-manual/3-experiment-management/3-3-publish-experiment.md" "发布实验"
create_placeholder "2-experimenter-manual/4-template-library.md" "模板库使用"
create_placeholder "2-experimenter-manual/5-invite-system/index.md" "邀请系统"
create_placeholder "2-experimenter-manual/5-invite-system/5-1-generate-invite.md" "生成邀请链接"
create_placeholder "2-experimenter-manual/5-invite-system/5-2-send-email.md" "发送邀请邮件"
create_placeholder "2-experimenter-manual/5-invite-system/5-3-social-share.md" "社交分享"
create_placeholder "2-experimenter-manual/6-data-management.md" "数据管理"
create_placeholder "2-experimenter-manual/7-backstage.md" "主试后台"
create_placeholder "2-experimenter-manual/8-permissions.md" "权限说明"

# 被试手册
create_placeholder "3-subject-manual/1-getting-started.md" "被试快速开始"
create_placeholder "3-subject-manual/2-registration-login/index.md" "注册与登录"
create_placeholder "3-subject-manual/2-registration-login/2-1-register.md" "注册流程"
create_placeholder "3-subject-manual/2-registration-login/2-2-login.md" "登录流程"
create_placeholder "3-subject-manual/2-registration-login/2-3-email-verify.md" "邮箱验证"
create_placeholder "3-subject-manual/2-registration-login/2-4-password-reset.md" "密码重置"
create_placeholder "3-subject-manual/3-browse-experiments/index.md" "浏览实验"
create_placeholder "3-subject-manual/3-browse-experiments/3-1-experiment-list.md" "实验列表"
create_placeholder "3-subject-manual/3-browse-experiments/3-2-search-filter.md" "搜索与筛选"
create_placeholder "3-subject-manual/3-browse-experiments/3-3-experiment-detail.md" "实验详情"
create_placeholder "3-subject-manual/4-participate-experiment/index.md" "参与实验"
create_placeholder "3-subject-manual/4-participate-experiment/4-1-apply.md" "报名参与"
create_placeholder "3-subject-manual/4-participate-experiment/4-2-consent.md" "知情同意"
create_placeholder "3-subject-manual/4-participate-experiment/4-3-do-experiment.md" "完成实验"
create_placeholder "3-subject-manual/4-participate-experiment/4-4-upload-data.md" "上传数据"
create_placeholder "3-subject-manual/4-participate-experiment/4-5-rate-experiment.md" "评价实验"
create_placeholder "3-subject-manual/5-personal-center.md" "个人中心"
create_placeholder "3-subject-manual/6-backstage.md" "被试后台"
create_placeholder "3-subject-manual/7-permissions.md" "权限说明"

# 平台信息
create_placeholder "4-platform-info/1-about.md" "平台简介"
create_placeholder "4-platform-info/2-team.md" "研究团队"
create_placeholder "4-platform-info/3-join-us.md" "招聘信息"
create_placeholder "4-platform-info/4-blog.md" "博客系统"
create_placeholder "4-platform-info/5-academic-frontier.md" "学术前沿"

# 数据隐私
create_placeholder "5-data-privacy/1-data-collection.md" "数据收集说明"
create_placeholder "5-data-privacy/2-privacy-protection.md" "隐私保护"
create_placeholder "5-data-privacy/3-informed-consent.md" "知情同意"
create_placeholder "5-data-privacy/4-ethics.md" "伦理合规"

# 故障排除
create_placeholder "6-troubleshooting/1-error-codes.md" "常见错误码"
create_placeholder "6-troubleshooting/2-login-issues.md" "登录问题"
create_placeholder "6-troubleshooting/3-upload-issues.md" "数据上传问题"
create_placeholder "6-troubleshooting/4-email-issues.md" "邮件接收问题"

# 技术支持
create_placeholder "7-technical-support/1-contact.md" "联系方式"

echo "所有占位文件创建完成！"

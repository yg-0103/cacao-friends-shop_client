import Comment from '.';

export default {
  component: Comment,
  title: 'atoms/Comment',
};

// 기본 코멘트
export const DefaultComment = () => (
  <Comment name="김지원" comment="나 좀 알려줘~~~" />
);

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import axios from "axios";
import CategoryModal from "@/components/admin/CategoryModal";
import BlogPostModal from "@/components/admin/BlogPostModal";

interface Category {
  _id: string;
  name: string;
}

const BlogManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all_category_data`
      );
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all_blogs_data`
      );
      setBlogPosts(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDeletePost = async (postId: string) => {
    if (confirm("Are You Sure You Want to Delete This Post?")) {
      try {
        await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/delete_blog_data/${postId}`
        );
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  const handleSavePost = async (data: any) => {
    try {
      if (editingPost) {
        await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/update_blog_data/${
            editingPost._id
          }`,
          data
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/post_a_new_blog`,
          data
        );
      }
      fetchBlogs();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleAddCategory = async (newCategory: string) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/post_a_new_category`, {
        name: newCategory,
      });
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (confirm("Are You Sure You Want to Delete This Category?")) {
      try {
        await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/delete_category_data/${id}`
        );
        fetchCategories();
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "Published";
      case "draft":
        return "Draft";
      case "archived":
        return "Archived";
      default:
        return status;
    }
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Blog Management
            </h1>
            <p className="text-gray-600">Manage blog posts and categories</p>
          </div>

          {/* Header Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                onClick={() => setIsCategoryModalOpen(true)}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Manage Categories
              </Button>
              <Button
                onClick={handleCreatePost}
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>
          </div>

          {/* Blog Posts List */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts List</CardTitle>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                // Mobile vertical layout
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <Card key={post._id} className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                              post.status
                            )}`}
                          >
                            {getStatusText(post.status)}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.publishDate}</span>
                          <span>{post.views?.toLocaleString() || 0} Views</span>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditPost(post)}
                            className="flex-1"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeletePost(post._id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                // Desktop table layout
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">
                          Title
                        </th>
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden md:table-cell">
                          Category
                        </th>
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">
                          Status
                        </th>
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden lg:table-cell">
                          Publish Date
                        </th>
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden lg:table-cell">
                          Views
                        </th>
                        <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPosts.map((post) => (
                        <tr
                          key={post._id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-4 px-2 sm:px-4">
                            <div>
                              <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-500 truncate max-w-xs">
                                {post.excerpt}
                              </p>
                              {post.featured && (
                                <span className="inline-block mt-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                                  Featured
                                </span>
                              )}
                              {/* Show category on mobile */}
                              <div className="md:hidden mt-1">
                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                  {post.category}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-2 sm:px-4 hidden md:table-cell">
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                              {post.category}
                            </span>
                          </td>
                          <td className="py-4 px-2 sm:px-4">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                                post.status
                              )}`}
                            >
                              {getStatusText(post.status)}
                            </span>
                          </td>
                          <td className="py-4 px-2 sm:px-4 text-sm text-gray-600 hidden lg:table-cell">
                            {post?.publishDate}
                          </td>
                          <td className="py-4 px-2 sm:px-4 text-sm text-gray-600 hidden lg:table-cell">
                            {post.views?.toLocaleString() || 0}
                          </td>
                          <td className="py-4 px-2 sm:px-4">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditPost(post)}
                                className="p-1 sm:p-2"
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeletePost(post._id)}
                                className="text-red-600 hover:text-red-700 p-1 sm:p-2"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Blog Post Modal */}
      {isModalOpen && (
        <BlogPostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          post={editingPost}
          onSave={handleSavePost}
          categories={categories}
        />
      )}

      {/* Category Management Modal */}
      {isCategoryModalOpen && (
        <CategoryModal
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
          categories={categories}
          onAddCategory={handleAddCategory}
          onDeleteCategory={handleDeleteCategory}
        />
      )}
    </div>
  );
};

export default BlogManagement;

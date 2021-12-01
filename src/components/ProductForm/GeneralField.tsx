import React, { useEffect, useState } from "react";
import {
  Input,
  Row,
  Col,
  Card,
  Form,
  Upload,
  InputNumber,
  TreeSelect,
} from "antd";
import ImgCrop from "antd-img-crop";
import { useAppDispatch, useAppSelector } from "@hook/redux";
import {
  getBrands,
  getCategories,
  getColors,
  getTags,
} from "@redux/slices/common";

import { RichEditor, version } from "react-quill-antd";
import "react-quill-antd/dist/index.css";

const { TreeNode } = TreeSelect;

const rules = {
  name: [
    {
      required: true,
      message: "Please enter product name",
    },
  ],
  description: [
    {
      required: true,
      message: "Please enter product description",
    },
  ],
  price: [
    {
      required: true,
      message: "Please enter product price",
    },
  ],
  discountPrice: [
    {
      required: true,
      message: "Please enter product price",
    },
  ],
};

const imageUploadProps = {
  name: "file",
  multiple: true,
  listType: "picture-card",
  showUploadList: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
};

interface IGeneralField {
  uploadedImg: any;
  handleUploadChangeImg: any;
  uploadedImgCover: any;
  handleUploadChangeImgCover: any;
}

const GeneralField: React.FC<IGeneralField> = ({
  handleUploadChangeImg,
  handleUploadChangeImgCover,
  uploadedImg,
  uploadedImgCover,
}) => {
  const dispatch = useAppDispatch();
  const { categories, tags, brands, colors } = useAppSelector(
    (state) => state.commonReducers
  );

  useEffect(() => {
    dispatch(getTags());
    dispatch(getBrands());
    dispatch(getColors());
  }, []);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      return;
    }

    dispatch(getCategories());
  }, [categories]);

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={17}>
        <Card title="Basic Info">
          <Form.Item name="name" label="Product name" rules={rules.name}>
            <Input placeholder="Product Name" />
          </Form.Item>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="brand" label="Brand" rules={rules.name}>
                <TreeSelect showSearch className="w-100" placeholder="Sizes">
                  {brands.map((elmLv1) => (
                    <TreeNode
                      key={`${elmLv1._id}`}
                      value={`${elmLv1._id}`}
                      title={`${elmLv1.name}`}
                    />
                  ))}
                </TreeSelect>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="color" label="Color" rules={rules.name}>
                <TreeSelect showSearch className="w-100" placeholder="Sizes">
                  {colors.map((elmLv1) => (
                    <TreeNode
                      key={`${elmLv1._id}`}
                      value={`${elmLv1._id}`}
                      title={`${elmLv1.name}`}
                    />
                  ))}
                </TreeSelect>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="Description"
            rules={rules.description}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Card>
        <Card title="Organization">
          <Form.Item name="category" label="Category">
            <TreeSelect
              showSearch
              multiple
              className="w-100"
              placeholder="Category"
            >
              {categories.map((elmLv1) => (
                <TreeNode
                  key={`${elmLv1._id}`}
                  value={`${elmLv1._id}`}
                  title={elmLv1.name}
                  selectable={false}
                >
                  {elmLv1.children?.map((elmLv2) => (
                    <TreeNode
                      key={`${elmLv2._id}`}
                      value={`${elmLv2._id}`}
                      title={elmLv2.name}
                      selectable={false}
                    >
                      {elmLv2.children?.map((elmLv3) => (
                        <TreeNode
                          key={`${elmLv3._id}`}
                          value={`${elmLv3._id}`}
                          title={elmLv3.name}
                        ></TreeNode>
                      ))}
                    </TreeNode>
                  ))}
                </TreeNode>
              ))}
            </TreeSelect>
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <TreeSelect
              showSearch
              multiple
              className="w-100"
              placeholder="Tags"
            >
              {tags.map((elmLv1) => (
                <TreeNode
                  key={`${elmLv1._id}`}
                  value={`${elmLv1._id}`}
                  title={`${elmLv1.name}`}
                  selectable={false}
                >
                  {elmLv1.children?.map((elmLv2) => (
                    <TreeNode
                      key={`${elmLv2._id}`}
                      value={`${elmLv2._id}`}
                      title={`${elmLv2.name}`}
                    />
                  ))}
                </TreeNode>
              ))}
            </TreeSelect>
          </Form.Item>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={7}>
        <Card title="Pricing">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="price" label="Price" rules={rules.price}>
                <InputNumber
                  className="w-100"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="discountPrice"
                label="Discount Price"
                rules={rules.discountPrice}
              >
                <InputNumber
                  className="w-100"
                  value={0}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="Media">
          <ImgCrop>
            <Upload
              accept=".png, .jpg, .jpeg"
              listType="picture-card"
              fileList={uploadedImg}
              beforeUpload={() => false}
              onChange={(e) => handleUploadChangeImg(e)}
            >
              {"+ Upload"}
            </Upload>
          </ImgCrop>
        </Card>
        <Card title="Media">
          <ImgCrop>
            <Upload
              accept=".png, .jpg, .jpeg"
              listType="picture-card"
              fileList={uploadedImgCover}
              beforeUpload={() => false}
              onChange={(e) => handleUploadChangeImgCover(e)}
            >
              {"+ Upload"}
            </Upload>
          </ImgCrop>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralField;

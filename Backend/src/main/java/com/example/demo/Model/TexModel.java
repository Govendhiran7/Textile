package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="data")
public class TexModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;
	private String Collections;
	private String gifts;
	private float price;
	private float offerprice;
	private String colsimg;
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getCollections() {
		return Collections;
	}
	public void setCollections(String collections) {
		Collections = collections;
	}
	public String getGifts() {
		return gifts;
	}
	public void setGifts(String gifts) {
		this.gifts = gifts;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public float getOfferprice() {
		return offerprice;
	}
	public void setOfferprice(float offerprice) {
		this.offerprice = offerprice;
	}
	public String getColsimg() {
		return colsimg;
	}
	public void setColsimg(String colsimg) {
		this.colsimg = colsimg;
	}
}


package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.TexModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Repository.TexRepo;
import com.example.demo.Repository.VerifyRepo;

@Service
public class TexService {
	@Autowired
	private TexRepo texrepo;
	@Autowired
	private VerifyRepo verifyrepo;
	public String Login(String username, String password) {
		VerifyModel xuser = verifyrepo.findByusername(username);
		if (xuser == null) {
			return "invalidusername";
		} else {
			if (xuser.getPassword().equals(password)) {
				return "success";
			} else {
				return "invalidpassword";
			}
		}
	}
	public String Signup(VerifyModel xuser) {
	    String username = xuser.getUsername();
	    VerifyModel authuser = verifyrepo.findByusername(username);
	    if (authuser == null) {
	        verifyrepo.save(xuser);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}
	public List<TexModel> getData() {
		return texrepo.findAll();
	}
	public TexModel addData(TexModel data) {
		return texrepo.save(data);
	}
	public TexModel editData(TexModel data, Long id) {
		TexModel edx = texrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setCollections(data.getCollections());
			edx.setGifts(data.getGifts());
			edx.setPrice(data.getPrice());
			edx.setOfferprice(data.getOfferprice());
			edx.setColsimg(data.getColsimg());
			return texrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	public String deleteData(Long id) {
		texrepo.deleteById(id);
		return "Deleted Successfully";
	}
	public Optional<TexModel> findbyID(Long id) {
		return texrepo.findById(id);
	}
}

